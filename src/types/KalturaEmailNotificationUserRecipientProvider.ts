
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';

export interface KalturaEmailNotificationUserRecipientProviderArgs  extends KalturaEmailNotificationRecipientProviderArgs {
    filter? : KalturaUserFilter;
}

/** 
* API class for recipient provider which constructs a dynamic list of recipients
* according to a user filter
**/
export class KalturaEmailNotificationUserRecipientProvider extends KalturaEmailNotificationRecipientProvider {

    filter : KalturaUserFilter;

    constructor(data? : KalturaEmailNotificationUserRecipientProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEmailNotificationUserRecipientProvider'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaUserFilter, subType : 'KalturaUserFilter'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationUserRecipientProvider',KalturaEmailNotificationUserRecipientProvider);