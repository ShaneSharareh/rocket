if @articles.length > 0
  json.articles do 
    @articles.each do |article|
      json.set! article.id do
        json.extract! article, :id, :title, :author, :reading_time, :url, :full_url, :featured, :description
        json.save_id article.saves.where(user_id: current_user.id).ids.first
        json.favorite_id article.favorites.where(user_id: current_user.id).ids.first
        json.cover_img url_for(article.cover_img)
        if (current_user.saved_articles.include?(article)) 
          json.updated_at article.saves.where(user_id: current_user.id).first.updated_at
        else
          json.updated_at article.updated_at
        end
        json.filter @filter
      end
    end
  end
else
  json.articles ({})
end

if @saves.length > 0
  json.saves do 
    @saves.each do |save|
      json.set! save.id do
        json.extract! save, :id, :user_id, :article_id, :archived
      end
    end
  end
else
  json.saves ({})
end