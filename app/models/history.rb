class History < ActiveRecord::Base
	
	validates :title, :content, presence: true

	has_attached_file :image, 
	:storage => :cloudinary,
	:path => ':id/:style/:filename',
	:cloudinary_credentials => Rails.root.join("config/cloudinary.yml")
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
	#has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/"
  	
end
