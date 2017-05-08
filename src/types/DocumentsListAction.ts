
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentListResponse } from './KalturaDocumentListResponse';

import { KalturaDocumentEntryFilter } from './KalturaDocumentEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDocumentEntryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List document entries by filter with paging support.
**/
export class DocumentsListAction extends KalturaRequest<KalturaDocumentListResponse> {

    filter : KalturaDocumentEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : DocumentsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDocumentListResponse', responseConstructor : KalturaDocumentListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'document_documents'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaDocumentEntryFilter, subType : 'KalturaDocumentEntryFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}
