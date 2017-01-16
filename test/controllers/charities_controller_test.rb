require 'test_helper'

class CharitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @charity = charities(:one)
  end

  test "should get index" do
    get charities_url
    assert_response :success
  end

  test "should get new" do
    get new_charity_url
    assert_response :success
  end

  test "should create charity" do
    assert_difference('Charity.count') do
      post charities_url, params: { charity: { cause: @charity.cause, charity_name: @charity.charity_name, description: @charity.description, location: @charity.location, logo: @charity.logo, shipping_address: @charity.shipping_address, url: @charity.url, user_id: @charity.user_id } }
    end

    assert_redirected_to charity_url(Charity.last)
  end

  test "should show charity" do
    get charity_url(@charity)
    assert_response :success
  end

  test "should get edit" do
    get edit_charity_url(@charity)
    assert_response :success
  end

  test "should update charity" do
    patch charity_url(@charity), params: { charity: { cause: @charity.cause, charity_name: @charity.charity_name, description: @charity.description, location: @charity.location, logo: @charity.logo, shipping_address: @charity.shipping_address, url: @charity.url, user_id: @charity.user_id } }
    assert_redirected_to charity_url(@charity)
  end

  test "should destroy charity" do
    assert_difference('Charity.count', -1) do
      delete charity_url(@charity)
    end

    assert_redirected_to charities_url
  end
end
