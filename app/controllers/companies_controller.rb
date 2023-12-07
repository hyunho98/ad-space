class CompaniesController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]

    def create
        company = Company.create!(company_params)
        user = User.create_with_userable(company)
        render json: user.userable, status: :created
    end

    def destroy
        company = Company.find(params[:id])
        company.destroy
        head :no_content
    end

    private

    def company_params
        params.permit(:name, :industry, :image_url)
    end
end
