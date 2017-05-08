
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelSegmentUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	liveChannelSegment : KalturaLiveChannelSegment;
}

/** 
* Update live channel segment by id
**/
export class LiveChannelSegmentUpdateAction extends KalturaRequest<KalturaLiveChannelSegment> {

    id : number;
	liveChannelSegment : KalturaLiveChannelSegment;

    constructor(data : LiveChannelSegmentUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveChannelSegment', responseConstructor : KalturaLiveChannelSegment  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannelsegment'  },
				action : { type : 'c' , default : 'update'  },
				id : { type : 'n'   },
				liveChannelSegment : { type : 'o'   , fallbackConstructor :  KalturaLiveChannelSegment, subType : 'KalturaLiveChannelSegment'}
            }
        );
        return result;
    }
}
