export const usersResult = async () => {
  const username = "coalition";
  const password = "skills-test";
  const auth = btoa(`${username}:${password}`);
  console.log(auth);

  try {
    let res = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          Authorization: `Basic [${auth}]`,
        },
      }
    );

    return await res.json();
  } catch (err) {
    console.log("err:", err);
  }
};
