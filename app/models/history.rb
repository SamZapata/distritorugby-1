class History < ActiveRecord::Base
	
	validates :title, :content, presence: true

	has_attached_file :image, 
	:storage => :cloudinary,
	:path => ':id/:style/:filename',
	:cloudinary_credentials => Rails.root.join("config/cloudinary.yml")
	
	has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/"
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
