class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]

    def show
        user = User.find(session[:user_id]).userable
        render json: user
    end

    def create
        company_agency = params.has_key?(:industry) ? (
            Company.new(company_params)
        ) : (
            Agency.new(agency_params)
        )

        user = User.create!({**user_params, userable: company_agency})
        session[:user_id] = user.id
        session[:user_type] = user.userable_type
        render json: user.userable, status: :created
    end

    def update
        user = User.find(session[:user_id]).userable
        if session[:user_type] == "Company"
            user.update!(company_params)
        elsif session[:user_type] == "Agency"
            user.update!(agency_params)
        end
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def company_params
        params.permit(:name, :industry, :image_url)
    end

    def agency_params
        params.permit(:name, :market, :image_url)
    end

    def render_not_found
        render json: { errors: ["User not found"] }, status: :not_found
    end
end
