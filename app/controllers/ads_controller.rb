class AdsController < ApplicationController
    before_action :company_only, only: [:create, destroy]
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
            user.ads.find(ad.id).update!(ad_params)
        else
            if ad.advertiser_id == session[:user_id]
                ad.advertiser_id = nil
            elsif !ad.advertiser_id
                ad.advertiser_id = session[:user_id]
            else
                render json: { errors: ["This ad has already been taken"] }, status: :unauthorized
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
        params.permit(:product, :content, :image_url, :advertiser_id)
    end

    def record_not_found
        render json: { errors: ["Ad not found"] }, status: :not_found
    end
end
