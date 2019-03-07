
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCreditRecurrenceFrequency } from './KalturaVendorCreditRecurrenceFrequency';
import { KalturaTimeRangeVendorCredit, KalturaTimeRangeVendorCreditArgs } from './KalturaTimeRangeVendorCredit';

export interface KalturaReoccurringVendorCreditArgs  extends KalturaTimeRangeVendorCreditArgs {
    frequency? : KalturaVendorCreditRecurrenceFrequency;
}


export class KalturaReoccurringVendorCredit extends KalturaTimeRangeVendorCredit {

    frequency : KalturaVendorCreditRecurrenceFrequency;

    constructor(data? : KalturaReoccurringVendorCreditArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReoccurringVendorCredit' },
				frequency : { type : 'es', subTypeConstructor : KalturaVendorCreditRecurrenceFrequency, subType : 'KalturaVendorCreditRecurrenceFrequency' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReoccurringVendorCredit',KalturaReoccurringVendorCredit);
