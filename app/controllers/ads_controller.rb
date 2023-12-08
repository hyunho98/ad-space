class AdsController < ApplicationController
    def index
        ads = Ad.all
        render json: ads
    end

    def create
        company = Company.find(session[:user_id])
        ad = company.ads.create!(ad_params)
        render json: ad
    end

    def update
        company = Company.find(session[:user_id])
        ad = company.ads.find(params[:id])
        ad.update!(ad_params)
        render json: ad
    end

    def advertiser_update
        ad = Ad.find(params[:id])
        if ad.advertiser_id == session[:user_id] || !ad.advertiser_id
            ad.update!(ad_params)
        else
            unauthorized
        end
        render json: ad
    end

    def destroy
        company = Company.find(session[:user_id])
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
