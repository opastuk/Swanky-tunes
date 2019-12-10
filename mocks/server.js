const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });
  server.route({
    method: 'GET',
    path: '/music',
    handler: (request, h) => ([
      {
        id: 1,
        poster: 'https://lh3.googleusercontent.com/55HOSFmy0d6Y5MruTfZ68oKzMod8VKmmQ91bpcQmbfRGs7v6E896AiIm2igijr2mpfsx7rKzZYJ1rAzqjvly-6vMnGcg7dPAmqtktTMUz1kbfx0wYHMTtCA5H6Ucpzf_6SMphZcaRze5iyqtVS2DpCAPcMe3RfWnrdJ_KdXCgROFank66Lz3dyd2pjH0UQKm2i1v97wPcVIjj0i2G0ofGSVW6kmjxor5boNadyR473RYuHmfkgH4lgMGIsNOybs_8nDDUoHGgxNmug5Y6vwurJ3DjU7FwmQjV-gBCyoWG-8M1NxU2jR-QjTvemLnJ4J_SfDrIyTP3jMEpTbm7rXugr2nKTNRrF0eSR1tsdvUCWheaV6KErNN0Y3sOgFWjqVxDHa7ZAR7JT-wyft1stYbx48LIbAQ15_MGKtgL2Abo0FD3-gxdH82ugXNKnRluievzgKcaXIi9DCX5MylHUi9vD3xH7Zju_kgPGfLmWDlPfYuQ70rHryEYa2-GbukNlH4P4IKN1k5r3wYOb-Nk-uTYXNByKG9ulBLg6XtzkNFkdoRhL93pZTZRPTR538JmVjKBbYY3-vHfsAR5AR2U7w8IYZGZ5mTdQHJwL4LVhL8HihywLOcwx_-uMDH7RYbamzJfukFhOxABShOfEuFqIMZK7FJrW4KY_d3EIetnzTkJyaMMs9SPGPnXyXZ87QRKoU=w3360-h1878',
        name: 'Game Time',
        author: 'Swanky Tunes, NSSND, Lexblaze',
        year: '2019',
      },
      {
        id: 2,
        poster: 'https://lh3.googleusercontent.com/cqTXwpQcD3DKv1pmWUYqqSA3JbQEm8mu_bGOtaL4WJNSGD4PlBezquInm2PMkHujTiHxFuwBFbIuBRHHeCm2wW_KDtF4d5lyOsl4KguPz6mZYgfSayJ3vyoHqzd8gh04FboQ5u0602PdbQ4ud3judQSYj4Q3AeJsDJtBuh5hUatiKxCBLNLEakXdJAXimkqwxTK0vUYlgSdz5TfRJSWN5EWZyhPzz_bY1DBC0BpOjjpU6oOr3P7ww8oyawkYnXroxnQt-Ew-CBRZzIWF1EPG9wjvQ_gdp4Jt-7_8nn9aIogAx1XR2shRPXjiePShYXu442z5XrVBVI44XKjsVoVUd9yrSYY53x_H_IPmvQFq2Gc3dn9QOSJfrgtq2yq3ZVYEN3GZwZDnyLPfMF01C99drxSjtrlpoh6C4phnCfar0D2emchZ3EAK8ZvYDRA6_n3n4Rs4glp6JBGtccTEhtcqxsD9tGG7SUApl63HLwSY3fv_DpMRodavvRzdbNfY2zkqImgKHDGooSan4CDTaTAKe9s7672F9ST_Wkv3q3QpEk-TxeDxuUy2vxDXszKjT2ddPwSz_tKq0-SLR6f61jmTeXvwLNrS6PkV9_DHleZ7dx0gZ90WYtge6ORn_Yt1HbXlJwB2cO2GFYppy72tm7j_pemd01Bg-xgfiyg4yYyWgXDAALn2Fky1a6iiONQG1EY=w3000-h5331',
        name: 'Sugar',
        author: 'Swanky Tunes, George Fetcher',
        year: '2019',
      },
      {
        id: 3,
        poster: 'https://lh3.googleusercontent.com/4GYUFjsUe4QQYjhqSa_WKykoZJeiTTsGfr1jfH2BFGQPYT4mV0FEqn26IPCo0AyPcpcxIDVh1EEVDtAFXCdVE15AdoxZD7PwHEoYC3VCNA5IYdtqAkxR0rpnsaNLLM8nWb77FfIk2rExx8cRrToL01NnPPg7BGGYRmvkI24KNuJdHjV7J7ACxTQ9Np2IqeWmbddxSSoHNeJGwq27YLybeg401JuWwYUS-ZnhKxjj0VEHGEShrSLdVelzw3_FvRlWYVBF5yO7Z-X8ERRqbimAAuLWu0CWjC685AhEo2j2uov6MAI-D5zYtbNVLqVoK3RrxEQKJdjdxYuqPmehm7JhuO-RXqNpLztcz0jyyZDnKCP34JJEEUE5K71sMiKlhQwXx0C3ay-tiu_-tVcd32J_ZSdSubROQfRD-9HeYGjO4wkH4VFJ-Sh70hB8Z08vsbFizLT88E3YtZ-678rnP7XY_lRu7asGogmyJNYvnane9y82fSm5hkNmc6gv1sGPR9sjHUqrWoO3g9OoMh43iO-HcJYSP7Iu2WilM8Ef-1vK-kA4Nel0pPLm_5lorN_MXE-ratc30o0gkCVbnHVwewxN2Ri14ieprFqLknuVu8C0ozTmey278WXIDgefc9A3M4JVXXXxqRGel7Jo4hW_AJDPZWO_AiFcwifq9imaHHxsCm9dXirgfZ7ZAJ3Gz_WVVxs=w3360-h1878',
        name: 'I’ll live on',
        author: 'Swanky Tunes, Jantine',
        year: '2019',
      },
      {
        id: 4,
        poster: 'https://lh3.googleusercontent.com/JGBGO4NToy5LwfgG64uKnb24S9fa3WxSztIECop_1DU7K1eX3BKYNkHA99zD9KGSSjhXex1RG4-8o2SN-a2PRf4afNuj8IC_Jp1bi6KJWzxj8haVRMYZjJhcKKOszgl0vKwluo9cnQv6cbrTT15SiMsQSksfiQzp2FpmFfxxhRvHHheRBYJVCEcGahRRFGv0tWB8NlHSBLvHBcyJ5jnI-6dAQTnMYCeYhjlDWLu8La4vELhAGXiOT8SnmSLeofkin7FXx_S1Ql81I6-3z3Xafv8QqXFr8A9toWWyG7MLoJH-x8iMAtUTJrysPU_7MNIZIYaODyiYuyAaeOFUPvpJJvY5olGv9lvMrAFqJ4FS4OPkBs4afLjEKo0pPd1EW93Y1xYZrlQsNvPCOw1AnfxrC1i9TZxak28MNmvKghBMYDKovXHyfM3elKFmPyCgEryYZ78PtQP7krRVigYXeZMWSQ__Yl2aToRjHNBLHKNsZUywch1v2nx8jYzt7I-JjSUDXN9XUA5-mWpObk2N6dYxazhdj5MRqKCSLlzIhCzQssVbJdEvRQpir_rgxDTlXB6tj_u9gsSMu966p40EW3khdyDI4KQHTE9CjJwpFwDTXR0qLnBLLzKmv8hNHFCw2N1_-rXy76u-tT9wC8eR08YVMhFdv93Vc1f0JmuvPgQswylVTqZakBYuae7mhg3QvPk=w3360-h1878',
        name: 'Supersonic',
        author: 'Swanky Tunes, Christian Burns',
        year: '2019',
      },
      {
        id: 5,
        poster: 'https://lh3.googleusercontent.com/-Y4yDhaAXTZpXiQLRUpYu7IdffftJeW5naxsjybxW6EW3i_B4AZQVMCb8L_d5xCPJW4hO3KKMf7tbO_Yu89LN1IMt0cjmZQhQhFbOUaixHkOy5M875VVJE5aZxR9XSh0kGFgjRX84pOY6t4Z0kjJ05cT90q01vGzRU9a7rsAL9fx9uy18xW4w8h0KabkvyAwO-ttZ5cpCFrQfsR9Dq7oGykhIDvFmnKuXoEnUaIoajYrX7jLtWHLjNBHi_FkOugBU_fuJZ8YS9FUQEsZ2TWhp7a1PLUy8aM9cNyF1qg1LlU8D4zneadyCTIucVteyPHlNM2aIkhwsQnl1vNg6trZj6WZeVMxbQBJH28NK18rlgC6JwpJvEMxSnNjrH8HbWI2wrWX_ztrAiCX4pT7gtM9xyVnX7f3NeAt4E59v4670k2w3zSHa9ncc4NSf6568mo374DaXbkJej6C58VK2NJhQ1Ic95F6JsSxJyya6YN_qbl1BXq-LD4B8kXNk_mIsecQ6qMoSttqjrkzGHxTmI8DRU1ERcABzsjtwjZC_y3IV0pGjdcTlkHz6sgIdmUBgw9flGDC_pG9qukDd9X_f0e34Y9k4vEsNHE2ba74p1wznIiRPKyq33lBopJGxG65i_mfPljCPQk8D4G9pSG_lwcvHaNUUHQNFATDeEE_FNx8YlTUr52r3AVRduKe60agYG4=w3000-h5331',
        name: 'Blow',
        author: 'Swanky Tunes',
        year: '2019',
      },
      {
        id: 6,
        poster: 'https://lh3.googleusercontent.com/0gK6QtWCI-z8ibgiokZQAbtaFFVIS3fvGkw2l0oYTrCS3qjvZpZlmLSCJyl6n6SjiPDzwFmqBVb3a9DrUtny5t_XhKT7g4s92jHxD_gpb1iV0qMdOYIoq3d_oZDVMF0bJBHypUNOVCX-eluBTnLoKtUDbshmN7xGNsM-136w7rIvtOPK3Vj-XNMGDq0ljCT5FZzGQ0Xp3kFZVBOATW5maLjdBuDvbeEQEeGpuEzEDh47_78BKDNtvt_007p2Oa09zg_jf7sh9utj4BWOmxFFpoj3UVxJXE8gm4Jf9hVhIQ1TRaNvFaOolJ13mNR_ULPCu8A0ZxZ_kL2sJi2fzBJ5ZQk7nzg_57Q3eCjOrMO8HL3eNc99tEuSKRh86tXZ8d6vspTE5ehsQ2wX4MoB16peVVv0kyPTAGRS8l4-669TSaRkgpa19q2hdkc_oUZprGf6bSVHt_Z6CYeiRDPydN0cBnE0xlchmlcKvnEUCJqSDi76fd5Vo4kjoTQgTDXwY52mPBHPY_d8sxHNw5waxXC4Jvi3ClkZ6awIxQy39TgqwEHnnOHDx1K15vsQSerJnb0yzS9H8eX7n3xLor8h5dzUK-jxm3vPxYuAfDRpWe_wsRQd3qZpxRfzocqB3e1qmqL5TSacz4MbEgaY_SaMneglYa9-eYSECxdJAZ-u53O1NGdYiNosBoHqV4VwWBt-ySI=w3360-h1878',
        name: 'Take me away',
        author: 'Swanky Tunes',
        year: '2019',
      },
      {
        id: 7,
        poster: 'https://lh3.googleusercontent.com/cittGUNBcUdjLz_qF_BQyVevliz3CY9InoZ-6znFclHNo8D7nkxDEwQh-2dzC2kv1ugxNCjaVt0xFJTwnZmutpiQ7GB4mnxztybW5F3BU0VoJxvayenEdO9dFXfMHtSvr7br9r_0JBTLdMYEwHquyFxPMXqEJMQrEeJST5k--Dzhhw2CPKYhjyp-Mrd15qQU4DEB41q_LodpGBYbQCvV4l-8FP5XVaiQ9GIH_nzulEj3jN8WhLiF7Yf5-5RbposOoquGDSn6_jXSLnSlemKeKQBhng5Z7uKcsAcqHUFGQirnP-t41hZBE2cuhBBJPvH5uBF2SoM6BwBA7c47eDp_zl9MHsaHwRC1t4CZ-zS7__t7Amq7ZMQjXJv8EJMH17vHu6PY3NX-5Ejnj_zvcvSOSZsvbi2qWS1egBHNIaAzeQ9bv5tfRzBXHRVUeFJ5Fb4bY8Fy8bmyl8pQppmMVsRgjgVastZaSDfo39bGIzMukWnI7z1k9N5cVkawXl7EDmpr1oHWebYIR02W5arGUyvTozra6wUA-dyl3niVY1O-Cc-LPQ3r3_EMve9N5lcT5v7vZK_bBJ4dq07LULTyjXWLJTtBP4KukoQI59MLB2qZUP4kjV4gOGnuaejwXCsTJM-CznF9z9Gu-ERiVb0yHRU5BubCeh42myvlRsBzNb--6ZXOeu7C551CWucipS5Pf9I=w3360-h1878',
        name: 'U Got Me Burning',
        author: 'Swanky Tunes',
        year: '2019',
      },
      {
        id: 8,
        poster: 'https://lh3.googleusercontent.com/s5xpJVKxpVzOyarlP_Q_nije0POr7sZpxzmJ4nFfIKvhVd3W4F-ktYkRpjJAmh_0ylCkObAu-37NhjCG9Q7zvjgQJYQ_jYIiOcNxe40IJWVRpU9MpAa4tvzc9Ot0QFXJeeRBIQc8fp9tVoK7CMHY4ddd1ibpv0kwDV_C-Fo-wgvqkVqaxYx1EYw3Ark7oyHEXJbkvba3NxBDO4uqZq5q8_rv2vhgFJaFSAG66ZZD1uFNUJfz3XoV0vpviGnmUxHGoFTfVNW1PNDOZqrT2a2N8Gvb22hu06ooY72oeUZG1gUqHhl8cGYaEwiLTfzsYcI8Z0OHT17lbSL_FnzbJD-r3t-JzLylb1qmLYH2LrrBvrQtmubxJufPTk7hezfC1ty1RfqIzmQzyVmDDjUrT9ZksYt0uQFMXWReBJfYjvEkoe7x82Axc8eUmsDVjGnb-onPwlM7cm---zARpb-BZ75uGwoN6-CGupeD38z6P6nE-K7s-9fQxK1YTMEEI6JfNeRwBlrG1h0JqldeatIuWSVx-T3DJUylDW003Q1WO7jDCfsKauf6p1SA2fLWkUYpIgMkI83AMK-X98czc8r6TyO7VEqu3RxU1X5fl-1KFF-_Qs8k-6njB9_tNlvEVrPVTYxZ-tVUsdk8J09TC-QkeK4n1z1Xxc16PX2d_jtTkvBej3_FrCJnXBHq9gLxmZ-fVBE=w3360-h1878',
        name: 'Virus',
        author: 'Swanky Tunes',
        year: '2019',
      },
      {
        id: 9,
        poster: 'https://lh3.googleusercontent.com/t4hR6gUVC8ygxuErj80FrwCnAveQQbzAEa2dNl16xiQHW7aD-STOqr8taZwqmdwUVwV6ps3Gv6OXfTguIWmg8tM7GbFl9CUNm3ZlJ3tbo3DNpRTI_iCf9Zukd9WDcqGHr53XI5R790XuUOZkYKKt-ByLt8TO5eQHophRZmw-T38Tl_A09zfylSj_D9kg6NKTycVoYYnWdJ8R70tqvumr_1G2gPqjoLnEigdqP135FX1dbCd5eUEoNPn_br4U3u0NX0vGzXUtD8zGTR7RA8ke8sPSnsG31BCeQJ2XZI45jWUeYZ4RHGBwpQoyk5nccvRjmCWxwYEIrLhuA9pWKrMDkzgz3LCekirx61WZnhSQ2Qdi0MwLj8s8rZoR_Z3mVdKxHRAzTVN7ZpQIN17GcoEq_a8zgfvjrjg6cY2a5veQJQZ-gzy9UxPCSQWYNV0K76MZozwgwKbupgnizKA9zhP37_CdCv0lObOxZQ7p8knfYo6rZAENegXrq2IIz4e6Vt-GGfr3aQ0jf1R15GXgr9TzOpX2Cst8iIDCTDQ1S3dI2fbxnJiEvoy8RDq7audFP80o4o_pFzUeUpr6OWNkXaJFm4v-8DrseOKCl_Srox2obmjC061-5ntD2f2028l9yl7wNifcm4BSAzRKqbqq3MJV7IJkoraOKVP3N5eI19riGdmAx-b92jhwBtDWcrB5zwo=w3360-h1878',
        name: 'Big Love To The Bass',
        author: 'Swanky Tunes',
        year: '2019',
      },
    ]),
  });

  await server.start();
  console.log('server, running at %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
