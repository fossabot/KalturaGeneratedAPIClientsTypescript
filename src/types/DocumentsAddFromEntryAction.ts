
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsAddFromEntryActionArgs  extends KalturaRequestArgs {
    sourceEntryId : string;
	documentEntry? : KalturaDocumentEntry;
	sourceFlavorParamsId? : number;
}

/** 
* Copy entry into new entry
**/
export class DocumentsAddFromEntryAction extends KalturaRequest<KalturaDocumentEntry> {

    sourceEntryId : string;
	documentEntry : KalturaDocumentEntry;
	sourceFlavorParamsId : number;

    constructor(data : DocumentsAddFromEntryActionArgs)
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
				action : { type : 'c', default : 'addFromEntry' },
				sourceEntryId : { type : 's' },
				documentEntry : { type : 'o', subTypeConstructor : KalturaDocumentEntry, subType : 'KalturaDocumentEntry' },
				sourceFlavorParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

