class Api::PeopleController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: User.random_person(current_user.liked_people)
  end

  def show
  end

  def new
  end

  def destroy
    Person.find(params[:id])
    Person.destroy
  end

  def update
    current_user.liked_people << params[:id].to_i
    current_user.save
  end


  def my_people
    render json: User.liked(current_user.liked_people)
  end
end
