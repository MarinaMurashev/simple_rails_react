class Api::NamesController < ApplicationController
  def show
    @name = {
      1 => { id: 1, first: "candy", last: "cane" },
      2 => { id: 2, first: "santa", last: "clause" },
      3 => { id: 3, first: "snow", last: "flake" },
    }[params[:id].to_i]

    render "show"
  end
end
