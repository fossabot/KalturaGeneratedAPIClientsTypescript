
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseType } from './KalturaResponseType';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';

export interface KalturaHttpNotificationObjectDataArgs  extends KalturaHttpNotificationDataArgs {
    apiObjectType? : string;
	format? : KalturaResponseType;
	ignoreNull? : boolean;
	code? : string;
}

/** 
* Evaluates PHP statement, depends on the execution context
**/
export class KalturaHttpNotificationObjectData extends KalturaHttpNotificationData {

    apiObjectType : string;
	format : KalturaResponseType;
	ignoreNull : boolean;
	code : string;

    constructor(data? : KalturaHttpNotificationObjectDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaHttpNotificationObjectData'  },
				apiObjectType : { type : 's'   },
				format : { type : 'en'   , subType : 'KalturaResponseType'},
				ignoreNull : { type : 'b'   },
				code : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotificationObjectData',KalturaHttpNotificationObjectData);