
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderAddActionArgs  extends KalturaRequestArgs {
    dropFolder : KalturaDropFolder;
}

/** 
* Allows you to add a new KalturaDropFolder object
**/
export class DropFolderAddAction extends KalturaRequest<KalturaDropFolder> {

    dropFolder : KalturaDropFolder;

    constructor(data : DropFolderAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDropFolder', responseConstructor : KalturaDropFolder  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dropfolder_dropfolder' },
				action : { type : 'c', default : 'add' },
				dropFolder : { type : 'o', subTypeConstructor : KalturaDropFolder, subType : 'KalturaDropFolder' }
            }
        );
        return result;
    }
}

