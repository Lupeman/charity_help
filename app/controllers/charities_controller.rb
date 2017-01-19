class CharitiesController < ApplicationController
  before_action :set_charity, only: [:show, :edit, :update, :destroy]

  skip_before_action :verify_authenticity_token
  skip_before_action :require_login, only: [:new, :create]


  # GET /charities
  # GET /charities.json
  def index
    @charities = Charity.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @charities }
    end
  end

  # GET /charities/1
  # GET /charities/1.json
  def show
    @charity = Charity.find_by(id: params[:id])
    @profile_editable = false
    if @charity.user_id == current_user.id
      @profile_editable = true
    end
  end

  # GET /charities/new
  def new
    @charity = Charity.new
  end

  # GET /charities/1/edit
  def edit
  end

  def search



  end



  # POST /charities
  # POST /charities.json
  def create
    @charity = Charity.new(charity_params)

    if @charity.save
      render json: @charity
    end
    # respond_to do |format|
    #   if @charity.save
    #     # redirect_to root_path
    #     format.html { redirect_to @charity, notice: 'Charity was successfully created.' }
    #     format.json { render json: @charity, status: :created }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @charity.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /charities/1
  # PATCH/PUT /charities/1.json
  def update
    respond_to do |format|
      if @charity.update(charity_params)
        format.html { redirect_to @charity, notice: 'Charity was successfully updated.' }
        format.json { render :show, status: :ok, location: @charity }
      else
        format.html { render :edit }
        format.json { render json: @charity.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /charities/1
  # DELETE /charities/1.json
  def destroy
    @charity.destroy
    respond_to do |format|
      format.html { redirect_to charities_url, notice: 'Charity was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_charity
      @charity = Charity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def charity_params
      params.require(:charity).permit(:charity_name, :cause, :description, :location, :logo, :charity_website, :shipping_address, :user_id)
    end
end
