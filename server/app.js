Meteor.startup(function() {

    if(!Prices.findOne()){
        Prices.insert({
            'Послуги':'Ціолодобовий',
            'грнЗаГод': 16,
            'грнЗаМісяць': 11712

        });
        Prices.insert({
            'Послуги':'Денний',
            'грнЗаГод': 24.60,
            'грнЗаМісяць': 9000

        });
        Prices.insert({
            'Послуги':'Нічний',
            'грнЗаГод': 25.95,
            'грнЗаМісяць':  9500

        });
        Prices.insert({
            'Послуги':'Супровід вантажу',
            'грнЗаГод': 25.00,
            'грнЗаМісяць': 18300

        });
    }

    if(!Stats.findOne()){
        Stats.insert({
            'Cпівробітники':0,
            'Досвід': 0,
            'Обєкти': 0

        });
    }
    if(!Gallery.findOne()){
        Gallery.insert({
            'URL':'0',
            'comentary': '0'
        });
    }
      if(!Contacts.findOne()){
        Contacts.insert({
            'email':'0'
  
        });
    }

});