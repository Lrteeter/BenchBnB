class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  # def self.in_bounds(bounds)
  #   benches_in_bounds = []
  #   Bench.all.each_with_index do |i, bench|
  #     if (bench[i].lat > bounds[1] && bench[i].lat < bounds[0] &&
  #       bench[i].lng > bounds[2] && bench[i].lng < bounds[3])
  #         benches_in_bounds.push(bench[i])
  #     end
  #   benches_in_bounds
  # end

end
