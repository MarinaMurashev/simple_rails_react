class Api::NamesController < ApplicationController
  def show
    @name = {
      1 => { id: 1, first: "candy", last: "cane", next_id: 2, previous_id: nil },
      2 => { id: 2, first: "santa", last: "clause", next_id: 3, previous_id: 1 },
      3 => { id: 3, first: "snow", last: "flake", next_id: nil, previous_id: 2},
    }[params[:id].to_i]

    render "show"
  end
end
