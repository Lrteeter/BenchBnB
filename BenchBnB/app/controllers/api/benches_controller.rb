class Api::BenchesController < ApplicationController

  def index
    #@benches = Bench.in_bounds(params[:bounds])
    @benches = Bench.all
    render :index
  end

  def create
    p "my params are #{bench_params}"
    @bench = Bench.new(bench_params)
    @bench.save!
    render :index
  end

  private
  def bench_params
    params.require(:benches).permit(:description,:lat,:lng,:seating)
  end
end
