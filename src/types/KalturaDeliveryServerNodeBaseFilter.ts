
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNodeFilter, KalturaServerNodeFilterArgs } from './KalturaServerNodeFilter';

export interface KalturaDeliveryServerNodeBaseFilterArgs  extends KalturaServerNodeFilterArgs {
    playbackDomainLike? : string;
	playbackDomainMultiLikeOr? : string;
	playbackDomainMultiLikeAnd? : string;
}


export class KalturaDeliveryServerNodeBaseFilter extends KalturaServerNodeFilter {

    playbackDomainLike : string;
	playbackDomainMultiLikeOr : string;
	playbackDomainMultiLikeAnd : string;

    constructor(data? : KalturaDeliveryServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDeliveryServerNodeBaseFilter'  },
				playbackDomainLike : { type : 's'   },
				playbackDomainMultiLikeOr : { type : 's'   },
				playbackDomainMultiLikeAnd : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryServerNodeBaseFilter',KalturaDeliveryServerNodeBaseFilter);