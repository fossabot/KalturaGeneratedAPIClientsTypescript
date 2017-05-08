
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface BaseEntryUpdateThumbnailJpegActionArgs  extends KalturaUploadRequestArgs {
    entryId : string;
	fileData : File;
}

/** 
* Update entry thumbnail using a raw jpeg file.
**/
export class BaseEntryUpdateThumbnailJpegAction extends KalturaUploadRequest<KalturaBaseEntry> {

    entryId : string;
	fileData : File;

    constructor(data : BaseEntryUpdateThumbnailJpegActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'updateThumbnailJpeg' },
				entryId : { type : 's' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}

