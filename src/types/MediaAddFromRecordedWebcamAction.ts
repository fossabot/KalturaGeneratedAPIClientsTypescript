
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddFromRecordedWebcamActionArgs  extends KalturaRequestArgs {
    mediaEntry : KalturaMediaEntry;
	webcamTokenId : string;
}

/** 
* Add new entry after the file was recored on the server and the token id exists
**/
export class MediaAddFromRecordedWebcamAction extends KalturaRequest<KalturaMediaEntry> {

    mediaEntry : KalturaMediaEntry;
	webcamTokenId : string;

    constructor(data : MediaAddFromRecordedWebcamActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'addFromRecordedWebcam' },
				mediaEntry : { type : 'o', subTypeConstructor : KalturaMediaEntry, subType : 'KalturaMediaEntry' },
				webcamTokenId : { type : 's' }
            }
        );
        return result;
    }
}

