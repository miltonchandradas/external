using {API_BUSINESS_PARTNER as businessPartner} from './external/API_BUSINESS_PARTNER.csn';

service BusinessPartnerService {
    @readonly
    entity BusinessPartners as projection on businessPartner.A_BusinessPartner {
        key BusinessPartner as id, FirstName as firstName, LastName as lastName, BusinessPartnerIsBlocked as blocked
    }
}
