"use strict";
var Product = (function () {
    function Product(id, name, logo, description, shortdescription, minrequirement, termsncond, youtube, industries, languages, departments, categories, features, screenshots, purchase_link, pricing_model, extraservices, description_th, shortdescription_th, features_th) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.description = description;
        this.shortdescription = shortdescription;
        this.minrequirement = minrequirement;
        this.termsncond = termsncond;
        this.youtube = youtube;
        this.industries = industries;
        this.languages = languages;
        this.departments = departments;
        this.categories = categories;
        this.features = features;
        this.screenshots = screenshots;
        this.purchase_link = purchase_link;
        this.pricing_model = pricing_model;
        this.extraservices = extraservices;
        this.description_th = description_th;
        this.shortdescription_th = shortdescription_th;
        this.features_th = features_th;
    }
    return Product;
}());
exports.Product = Product;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFDRSxpQkFDUyxFQUFNLEVBQ04sSUFBVyxFQUNYLElBQVcsRUFDWCxXQUFrQixFQUNsQixnQkFBdUIsRUFDdkIsY0FBcUIsRUFDckIsVUFBaUIsRUFDakIsT0FBYyxFQUNkLFVBQWdCLEVBQ2hCLFNBQWUsRUFDZixXQUFpQixFQUNqQixVQUFnQixFQUNoQixRQUFjLEVBQ2QsV0FBaUIsRUFDakIsYUFBbUIsRUFDbkIsYUFBbUIsRUFDbkIsYUFBbUIsRUFDbkIsY0FBcUIsRUFDckIsbUJBQTBCLEVBQzFCLFdBQWlCO1FBbkJqQixPQUFFLEdBQUYsRUFBRSxDQUFJO1FBQ04sU0FBSSxHQUFKLElBQUksQ0FBTztRQUNYLFNBQUksR0FBSixJQUFJLENBQU87UUFDWCxnQkFBVyxHQUFYLFdBQVcsQ0FBTztRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQU87UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQU87UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBTztRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBTTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFNO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQU07UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBTTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFNO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQU07UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQU07UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQU07UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQU07UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQU87UUFDckIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFPO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFNO0lBQ3hCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxlQUFPLFVBdUJuQixDQUFBIiwiZmlsZSI6InNoYXJlZC9tb2RlbHMvcHJvZHVjdC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcm9kdWN0e1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWQ6YW55LFxuICAgIHB1YmxpYyBuYW1lOnN0cmluZyxcbiAgICBwdWJsaWMgbG9nbzpzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOnN0cmluZyxcbiAgICBwdWJsaWMgc2hvcnRkZXNjcmlwdGlvbjpzdHJpbmcsXG4gICAgcHVibGljIG1pbnJlcXVpcmVtZW50OnN0cmluZyxcbiAgICBwdWJsaWMgdGVybXNuY29uZDpzdHJpbmcsXG4gICAgcHVibGljIHlvdXR1YmU6c3RyaW5nLFxuICAgIHB1YmxpYyBpbmR1c3RyaWVzOmFueVtdLFxuICAgIHB1YmxpYyBsYW5ndWFnZXM6YW55W10sXG4gICAgcHVibGljIGRlcGFydG1lbnRzOmFueVtdLFxuICAgIHB1YmxpYyBjYXRlZ29yaWVzOmFueVtdLFxuICAgIHB1YmxpYyBmZWF0dXJlczphbnlbXSxcbiAgICBwdWJsaWMgc2NyZWVuc2hvdHM6YW55W10sXG4gICAgcHVibGljIHB1cmNoYXNlX2xpbms6YW55W10sXG4gICAgcHVibGljIHByaWNpbmdfbW9kZWw6YW55W10sXG4gICAgcHVibGljIGV4dHJhc2VydmljZXM6YW55W10sXG4gICAgcHVibGljIGRlc2NyaXB0aW9uX3RoOnN0cmluZyxcbiAgICBwdWJsaWMgc2hvcnRkZXNjcmlwdGlvbl90aDpzdHJpbmcsXG4gICAgcHVibGljIGZlYXR1cmVzX3RoOmFueVtdXG4gICl7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
