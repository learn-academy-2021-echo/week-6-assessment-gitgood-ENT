# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# create an instance of ApplicationController called BlogPostsController
class BlogPostsController < ApplicationController
  def index
    # ---2) 
    # fetches all BlogPosts from the database
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # the show action calls BlogPost.find with the id from the route parameter. The BlogPost is stored in the @post instance variable, so it is accessible by the view. By default the show action will render path/show.html.erb
    @post = BlogPost.find(params[:id])
  end
  
  # ---4)
  # This is the C in CRUD. The new action instantiates a new blogpost, but does not save it. By default the new action will render path/new.html.erb
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # The create action instantiates a new blogpost with values for title and content, and if it is valid then it redirects to the post, otherwise it refreshes the page to reattempt
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # U (Update) of CRUD => edit and update have similar functions to those of new and create. edit fetches the blogpost from the database and stores it in the @post instance variable to be used when building the form.
  def edit
    @post = BlogPost.find(params[:id])
  end
  
  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # the update action re-fetches the data and attempts to update it. If no validations fail and the updatw is successful, it redirects to the blog post, otherwise it will remain and allow for another attempt to update. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # Destroy fetches the data to be destroyed and runs destroy on it. If the method fails then it will not redirect to a new page.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # This is where the private methods are stored. Private methods can only be accessed by the defining class, or by methods within the class that access it.
  private
  def blog_post_params
    # ---10
    # These are strong params and will pass an error to the user if they are not satisfied when attempting to create or update data, or whatever method calls on this private method
    params.require(:blog_post).permit(:title, :content)
  end
end
