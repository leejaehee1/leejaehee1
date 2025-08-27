const AWS = require("aws-sdk");
const S3 = new AWS.S3();
const Sharp = require("sharp");

exports.optimize = async (event) => {
  const srcBucket = event.Records[0].s3.bucket.name;
  const srcKey = decodeURIComponent(
    event.Records[0].s3.object.key.replace(/\+/g, " ")
  );
  const destBucket = process.env.DEST_BUCKET;
  const destKey = `optimized-${srcKey}`;

  try {
    const originalImage = await S3.getObject({
      Bucket: srcBucket,
      Key: srcKey,
    }).promise();

    const optimizedImage = await Sharp(originalImage.Body)
      .resize(800, 600)
      .jpeg({ quality: 80 })
      .toBuffer();

    await S3.putObject({
      Bucket: destBucket,
      Key: destKey,
      Body: optimizedImage,
      ContentType: "image/jpeg",
    }).promise();

    console.log(`Optimized image saved to s3://${destBucket}/${destKey}`);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Image optimized and saved to s3://${destBucket}/${destKey}`,
      }),
    };
  } catch (error) {
    console.error("Error optimizing image:", error);
    throw error;
  }
};
