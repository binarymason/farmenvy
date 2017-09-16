class SessionController < ApplicationController
  def create
    render json: { timeout: 1.day.from_now.to_i * 1000 }
  end
end
