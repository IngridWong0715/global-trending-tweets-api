# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_27_181208) do

  create_table "places", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.integer "parentid"
    t.string "country"
    t.integer "woeid"
    t.string "countryCode"
    t.integer "twitter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "address"
    t.float "latitude"
    t.float "longitude"
    t.string "visited_by"
    t.string "title"
  end

  create_table "tweets", force: :cascade do |t|
    t.integer "twitter_id"
    t.string "text"
    t.datetime "twitter_created_at"
    t.string "location"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.integer "twitter_user_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "uid"
  end

end
