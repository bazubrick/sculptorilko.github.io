Meteor.publish('price',function () {
    return Prices.find();

});
Meteor.publish('gallery',function () {
    return Gallery.find();

});