
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	documentEntry : KalturaDocumentEntry;
}

/** 
* Update document entry. Only the properties that were set will be updated.
**/
export class DocumentsUpdateAction extends KalturaRequest<KalturaDocumentEntry> {

    entryId : string;
	documentEntry : KalturaDocumentEntry;

    constructor(data : DocumentsUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDocumentEntry', responseConstructor : KalturaDocumentEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				documentEntry : { type : 'o', subTypeConstructor : KalturaDocumentEntry, subType : 'KalturaDocumentEntry' }
            }
        );
        return result;
    }
}

