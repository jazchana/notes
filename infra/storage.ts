export const bucket = new sst.aws.Bucket("Uploads");

export const table = new sst.aws.Dynamo("Notes", {
    fields: {
        userId: "String",
        noteId: "String",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId"},
});