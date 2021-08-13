import AWS from 'aws-sdk';

export const uploadToS3 = async (file, userId, folderName) => {
  AWS.config.update({
    credentials: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
    },
  });

  const { filename, createReadStream } = await file;
  let readStream = createReadStream();
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: 'dailylab',
      Key: objectName,
      Expires: 60,
      ACL: 'public-read',
      Body: readStream, //fire(strem)
    })
    .promise();
  return Location;
};
