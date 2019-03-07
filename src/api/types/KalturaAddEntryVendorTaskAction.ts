
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAddEntryVendorTaskActionArgs  extends KalturaRuleActionArgs {
    catalogItemIds? : string;
}


export class KalturaAddEntryVendorTaskAction extends KalturaRuleAction {

    catalogItemIds : string;

    constructor(data? : KalturaAddEntryVendorTaskActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAddEntryVendorTaskAction' },
				catalogItemIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAddEntryVendorTaskAction',KalturaAddEntryVendorTaskAction);
