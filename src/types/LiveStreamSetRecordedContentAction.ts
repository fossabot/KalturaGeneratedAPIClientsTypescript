
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamSetRecordedContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	recordedEntryId? : string;
}

/** 
* Sey recorded video to live entry
**/
export class LiveStreamSetRecordedContentAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	recordedEntryId : string;

    constructor(data : LiveStreamSetRecordedContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveEntry', responseConstructor : KalturaLiveEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream'  },
				action : { type : 'c' , default : 'setRecordedContent'  },
				entryId : { type : 's'   },
				mediaServerIndex : { type : 'es'   , subType : 'KalturaEntryServerNodeType'},
				resource : { type : 'o'   , fallbackConstructor :  KalturaDataCenterContentResource, subType : 'KalturaDataCenterContentResource'},
				duration : { type : 'n'   },
				recordedEntryId : { type : 's'   }
            }
        );
        return result;
    }
}
