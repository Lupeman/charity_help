require 'test_helper'

class DonorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @donor = donors(:one)
    @donor2 = Donor.new
    @donor2.first_name = 'Hail'
    @donor2.last_name = "Satan"
    @donor2.company_name = 'Hell'
  end

  test "should get index" do
    get donors_url
    assert_response :success
  end

  test "should get new" do
    get new_donor_url
    assert_response :success
  end

  test "should create donor" do
    assert_difference('Donor.count') do
      post donors_url, params: { donor: { company_name: @donor2.company_name, first_name: @donor2.first_name, last_name: @donor2.last_name, user_id: User.last.id } }
    end

    assert_response :success
  end

  test "should show donor" do
    get donor_url(@donor)
    assert_response :success
  end

  test "should get edit" do
    get edit_donor_url(@donor)
    assert_response :success
  end

  test "should update donor" do
    patch donor_url(@donor), params: { donor: { company_name: @donor.company_name, first_name: @donor.first_name, last_name: @donor.last_name, user_id: User.last.id } }
    assert_response :success
  end

  test "should destroy donor" do
    assert_difference('Donor.count', -1) do
      delete donor_url(@donor)
    end

    assert_redirected_to donors_url
  end
end
