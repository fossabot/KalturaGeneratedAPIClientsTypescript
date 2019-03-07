
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaQuizUserEntryArgs  extends KalturaUserEntryArgs {
    feedback? : string;
}


export class KalturaQuizUserEntry extends KalturaUserEntry {

    readonly score : number;
	readonly calculatedScore : number;
	feedback : string;
	readonly version : number;

    constructor(data? : KalturaQuizUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizUserEntry' },
				score : { type : 'n', readOnly : true },
				calculatedScore : { type : 'n', readOnly : true },
				feedback : { type : 's' },
				version : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuizUserEntry',KalturaQuizUserEntry);
