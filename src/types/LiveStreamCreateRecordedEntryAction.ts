
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamCreateRecordedEntryActionArgs  extends KalturaRequestArgs {
    entryId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	liveEntryStatus : KalturaEntryServerNodeStatus;
}


export class LiveStreamCreateRecordedEntryAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	liveEntryStatus : KalturaEntryServerNodeStatus;

    constructor(data : LiveStreamCreateRecordedEntryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveEntry', responseConstructor : KalturaLiveEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'createRecordedEntry' },
				entryId : { type : 's' },
				mediaServerIndex : { type : 'es', subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' },
				liveEntryStatus : { type : 'en', subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' }
            }
        );
        return result;
    }
}

