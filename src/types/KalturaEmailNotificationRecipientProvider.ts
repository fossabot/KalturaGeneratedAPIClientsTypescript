
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEmailNotificationRecipientProviderArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* Abstract core class  which provides the recipients (to, CC, BCC) for an email
* notification
**/
export class KalturaEmailNotificationRecipientProvider extends KalturaObjectBase {

    

    constructor(data? : KalturaEmailNotificationRecipientProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationRecipientProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationRecipientProvider',KalturaEmailNotificationRecipientProvider);
