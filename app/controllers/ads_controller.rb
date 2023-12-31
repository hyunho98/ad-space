class AdsController < ApplicationController
    before_action :company_only, only: [:create, :destroy]
    skip_before_action :authorize, only: [:index]

    def index
        ads = Ad.all
        render json: ads
    end

    def create
        company = User.find(session[:user_id]).userable
        ad = company.ads.create!(ad_params)
        render json: ad
    end

    def update
        user = User.find(session[:user_id]).userable
        ad = Ad.find(params[:id])

        if session[:user_type] == "Company"
            ad = user.ads.find(ad.id)
            ad.update!(ad_params)
        else
            if ad.agency_id == user.id || ad.agency_id.nil?
                ad.update!(params.permit(:agency_id))
            else
                render json: { errors: ["This ad has already been taken"] }, status: :unauthorized
                return
            end
        end

        render json: ad
    end

    def destroy
        company = User.find(session[:user_id]).userable
        ad = company.ads.find(params[:id])
        ad.destroy
        head :no_content
    end

    private

    def ad_params
        if params[:image_url].empty?
            params[:image_url] = 'https://www.lg.com/lg5-common/images/common/product-default-list-350.jpg'
        end
        params.permit(:product, :content, :image_url)
    end

    def record_not_found
        render json: { errors: ["Ad not found"] }, status: :not_found
    end
end
