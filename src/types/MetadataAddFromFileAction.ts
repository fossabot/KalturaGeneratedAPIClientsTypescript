
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';

import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MetadataAddFromFileActionArgs  extends KalturaUploadRequestArgs {
    metadataProfileId : number;
	objectType : KalturaMetadataObjectType;
	objectId : string;
	xmlFile : File;
}

/** 
* Allows you to add a metadata object and metadata file associated with Kaltura
* object
**/
export class MetadataAddFromFileAction extends KalturaUploadRequest<KalturaMetadata> {

    metadataProfileId : number;
	objectType : KalturaMetadataObjectType;
	objectId : string;
	xmlFile : File;

    constructor(data : MetadataAddFromFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadata', responseConstructor : KalturaMetadata  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadata'  },
				action : { type : 'c' , default : 'addFromFile'  },
				metadataProfileId : { type : 'n'   },
				objectType : { type : 'es'   , subType : 'KalturaMetadataObjectType'},
				objectId : { type : 's'   },
				xmlFile : { type : 'f'   }
            }
        );
        return result;
    }
}
