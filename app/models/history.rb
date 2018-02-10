class History < ActiveRecord::Base
	validates :title, :content, presence: true
end
