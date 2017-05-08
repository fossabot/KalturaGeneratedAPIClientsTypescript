
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveChannelCompareAttribute } from './KalturaLiveChannelCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaLiveChannelCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaLiveChannelCompareAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaLiveChannel attributes. Use
* KalturaLiveChannelCompareAttribute enum to provide attribute name. /
**/
export class KalturaLiveChannelCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaLiveChannelCompareAttribute;

    constructor(data? : KalturaLiveChannelCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLiveChannelCompareAttributeCondition'  },
				attribute : { type : 'es'   , subType : 'KalturaLiveChannelCompareAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannelCompareAttributeCondition',KalturaLiveChannelCompareAttributeCondition);