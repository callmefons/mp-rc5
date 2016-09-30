"use strict";
var VendorCompany = (function () {
    function VendorCompany(organization_type, suite, numberstreet, city, state, country, zip, company_name, url, logo, year, mission, founded, size, affiliation, companyphone, taxid, facebook, twitter, line) {
        this.organization_type = organization_type;
        this.suite = suite;
        this.numberstreet = numberstreet;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zip = zip;
        this.company_name = company_name;
        this.url = url;
        this.logo = logo;
        this.year = year;
        this.mission = mission;
        this.founded = founded;
        this.size = size;
        this.affiliation = affiliation;
        this.companyphone = companyphone;
        this.taxid = taxid;
        this.facebook = facebook;
        this.twitter = twitter;
        this.line = line;
    }
    return VendorCompany;
}());
exports.VendorCompany = VendorCompany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9tb2RlbHMvdmVuZG9yLWNvbXBhbnkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0ksdUJBQ1csaUJBQXlCLEVBQ3pCLEtBQWEsRUFDYixZQUFvQixFQUNwQixJQUFZLEVBQ1osS0FBYSxFQUNiLE9BQWUsRUFDZixHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsR0FBVyxFQUNYLElBQVksRUFDWixJQUFZLEVBQ1osT0FBZSxFQUNmLE9BQWUsRUFDZixJQUFZLEVBQ1osV0FBbUIsRUFDbkIsWUFBb0IsRUFDcEIsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLE9BQWUsRUFDZixJQUFZO1FBbkJaLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQ3JCLENBQUM7SUFDUCxvQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlkscUJBQWEsZ0JBdUJ6QixDQUFBIiwiZmlsZSI6InNoYXJlZC9tb2RlbHMvdmVuZG9yLWNvbXBhbnkubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVmVuZG9yQ29tcGFueXtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIG9yZ2FuaXphdGlvbl90eXBlPzpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBzdWl0ZT86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgbnVtYmVyc3RyZWV0PzpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjaXR5PzpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBzdGF0ZT86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgY291bnRyeT86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgemlwPzpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjb21wYW55X25hbWU/OnN0cmluZyxcbiAgICAgICAgcHVibGljIHVybD86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgbG9nbz86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgeWVhcj86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgbWlzc2lvbj86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgZm91bmRlZD86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgc2l6ZT86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgYWZmaWxpYXRpb24/Om51bWJlcixcbiAgICAgICAgcHVibGljIGNvbXBhbnlwaG9uZT86c3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGF4aWQ/OnN0cmluZyxcbiAgICAgICAgcHVibGljIGZhY2Vib29rPzpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0d2l0dGVyPzpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsaW5lPzpzdHJpbmdcbiAgICApe31cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
