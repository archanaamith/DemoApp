class CategoriesController < ApplicationController

	def new
		@category = Category.new
	end

	def create
		@category = Category.new(params[:category])
		if @category.save
			@post = Post.new	
			redirect_to(:controller=>"posts",:action=>"new")
		else
			render 'new'
		end
	end

	def message
	end

end
