
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannel } from './KalturaLiveChannel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelAddActionArgs  extends KalturaRequestArgs {
    liveChannel : KalturaLiveChannel;
}

/** 
* Adds new live channel.
**/
export class LiveChannelAddAction extends KalturaRequest<KalturaLiveChannel> {

    liveChannel : KalturaLiveChannel;

    constructor(data : LiveChannelAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveChannel', responseConstructor : KalturaLiveChannel  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannel'  },
				action : { type : 'c' , default : 'add'  },
				liveChannel : { type : 'o'   , fallbackConstructor :  KalturaLiveChannel, subType : 'KalturaLiveChannel'}
            }
        );
        return result;
    }
}
