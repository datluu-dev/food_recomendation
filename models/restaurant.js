const mongoose = require("mongoose");
const Paginate = require("mongoose-paginate-v2");
const db = require("../lib/db");
var Schema = mongoose.Schema;

var Restaurant = new Schema(
  {
    address: String,
    asap_is_available: Boolean,
    available_times: Object,
    brand: Object,
    brand_id: Number,
    campaigns: Array,
    categories: [String],
    city_id: Number,
    confirm_language: Object,
    confirm_methods: Object,
    contract_type: Number,
    cuisines: [String],
    delivery: Object,
    delivery_categories: [Number],
    delivery_fees: Array,
    delivery_id: Number,
    display_order: Number,
    district_id: Number,
    foody_service_id: Number,
    id: Number,
    is_city_alert: Boolean,
    is_display_cutlery: Boolean,
    is_favorite: Boolean,
    is_now_delivery: Boolean,
    is_pickup: Boolean,
    is_quality_merchant: Boolean,
    is_subscribe: Boolean,
    is_support_booking: Boolean,
    limit_distance: Number,
    location_url: String,
    min_order_value: Object,
    name: String,
    name_en: String,
    packing_fee: Object,
    parent_category_id: Number,
    parking_fee: Object,
    phones: [String],
    photos: [Object],
    position: Object,
    price_range: Object,
    rating: Object,
    res_photos: [Object],
    restaurant_id: { type: Number, unique: true },
    restaurant_url: String,
    root_category_ids: [Number],
    service_type: Number,
    short_description: String,
    total_order: Number,
    url: String,
    url_rewrite_name: String,
    user_favorite_count: Number,
    vat: Object,
    video: Object,
    menu_infos: [Object],
  },
  { timestamps: true }
);
Restaurant.index({ name: "text" });
Restaurant.plugin(Paginate);
// Compile model from schema
module.exports = mongoose.model("Restaurant", Restaurant);
