# 07-03 Mapping Template Profit Commission (Estimate)

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1298301060  
> **Page ID:** 1298301060  
> **Path:** Home / Current Version / 03. User Interface Specification / 07. หน้าจอประมวลผล Estimate / 07-03 Mapping Template Profit Commission (Estimate)

---

รับ Parameter จากหน้าจอประมวลผล Estimate
| ข้อมูล | Parameter | ตัวอย่างข้อมูล |
| --- | --- | --- |
| ID ของรายการ | {ACT_HD_ID} | 1 |
| Reinsurer | {REINSURER_CODE} | Thaire |
| Treaty Code | {TREATY_CODE} | THREL_Ind_CI50_Rider |
| Period quarter_year | {QUATER_YEAR} | 2023 |
| Template File ID | {TEMPLATE_ID} | 432 |
| Template File Name | {TEMPLATE_NAME} | GIB_Ind_ORD_Med |

เงื่อนไขการดึงข้อมูล
1. ตรวจสอบ {ACT_HD_ID} = tx_ri_sum_act.ri_act_hd_id จะได้ tx_ri_sum_act.tx_ri_sum_act_id
2. นำ tx_ri_sum_act.tx_ri_sum_act_id ที่ได้ ตรวจสอบใน [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est).ri_sum_profit_comm_id
3. จะได้รายการภายใต้ [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est).ri_sum_profit_comm_id นั้น

แสดงรายละเอียด
| **Table** | **Field** |
| --- | --- |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | year |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q1_prem |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q1_com |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q1_cliam |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q2_prem |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q2_com |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q2_cliam |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q3_prem |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q3_com |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q3_cliam |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q4_prem |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q4_com |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_q4_cliam |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_life |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_add |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_tpd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_ttd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_rider |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_com_life |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_com_add |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_com_tpd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_com_ttd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_com_rider |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_claim_life |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_claim_add |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_claim_tpd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_claim_ttd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_claim_rider |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_income |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_income_gp_toa |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_commission |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_claim_expenses |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_claim_expenses_gp_toa |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_commission |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_commission_gp_toa |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_bus_expenses_life |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_bus_expenses_add |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_bus_expenses_tpd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_bus_expenses_ttd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_bus_expenses_rider |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_bus_expenses_gp_toa |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_bus_expenses |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_life |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_add |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_tpd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_ttd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_rider |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_gp_toa |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_life |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_add |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_tpd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_ttd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_rider |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_gp_toa |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance_life |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance_add |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance_tpd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance_ttd |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance_rider |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance_gp_toa |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | loss_ratio |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | first_pc_per |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_first_pc_amount |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | second_pc_per |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_second_pc_amount |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_pc_current_year |

แทนค่า Parameter Profit comm ปีก่อนหน้า
1. ค้นหาค่าของ Profit Comm ก่อนหน้าจาก [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est)

แสดงรายละเอียด
| Table | Field | Condition | Parameter |
| --- | --- | --- | --- |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | year | {YEAR} - 1 |  |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_life |  | {PREVIOUS_RESERVE_OUT_CLAIM_LIFE} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_life |  | {PREVIOUS_UNERN_PREM_LIFE} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_life |  | {PREVIOUS_NET_INCOME_LIFE} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_add |  | {PREVIOUS_RESERVE_OUT_CLAIM_ADD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_add |  | {PREVIOUS_UNERN_PREM_ADD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_add |  | {PREVIOUS_NET_INCOME_ADD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_tpd |  | {PREVIOUS_RESERVE_OUT_CLAIM_TPD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_tpd |  | {PREVIOUS_UNERN_PREM_TPD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_tpd |  | {PREVIOUS_NET_INCOME_TPD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_ttd |  | {PREVIOUS_RESERVE_OUT_CLAIM_TTD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_ttd |  | {PREVIOUS_UNERN_PREM_TTD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_ttd |  | {PREVIOUS_NET_INCOME_TTD} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim_rider |  | {PREVIOUS_RESERVE_OUT_CLAIM_RIDER} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium_rider |  | {PREVIOUS_UNERN_PREM_RIDER} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_prem_rider |  | {PREVIOUS_NET_INCOME_RIDER} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_reserve_out_claim |  | {PREVIOUS_RESERVE_OUT_CLAIM} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_unerned_premium |  | {PREVIOUS_UNERN_PREM} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_income |  | {PREVIOUS_NET_INCOME} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance |  | {PREVIOUS_NET_BALANCE} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_net_balance | Icon ผลรวมรายการของ{YEAR}{YEAR} - 1{YEAR} - 2{YEAR} - 3{YEAR} - 4 | {SUM_5Y_NET_BALANCE} |
| [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est) | sum_pc_current_year | Icon ผลรวมรายการของ{YEAR} - 1{YEAR} - 2{YEAR} - 3{YEAR} - 4 | {SUM_4Y_PC} |

แทนค่า Parameter ตาม Config
1. ตรวจสอบ {ACT_HD_ID} = tx_ri_sum_act.ri_act_hd_id จะได้ tx_ri_sum_act.tx_ri_sum_act_id
2. นำ tx_ri_sum_act.tx_ri_sum_act_id ที่ได้ ตรวจสอบใน [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est).ri_sum_profit_comm_id จะได้ [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est).cf_profit_comm_id
3. นำ [tx_ri_sum_profit_comm_est](http://wiki.thaisamut.co.th/display/RDSINRI/69.+tx_ri_sum_profit_comm_est).cf_profit_comm_id ตรวจสอบใน [cf_profit_comm](http://wiki.thaisamut.co.th/x/ZoPGQQ).cf_profit_comm_id
4. จะได้รายการแทน Parameter ดังนี้

|  |  |  |
| --- | --- | --- |
| [cf_profit_comm](http://wiki.thaisamut.co.th/x/ZoPGQQ) | percent_profit_comm | {PER_PRO_COMM} |
| [cf_profit_comm](http://wiki.thaisamut.co.th/x/ZoPGQQ) | percent_admin_expense | {ADMIN_EX_PER} |
| [cf_profit_comm](http://wiki.thaisamut.co.th/x/ZoPGQQ) | mini_cession | {MIN_CESSION} |
| [cf_profit_comm](http://wiki.thaisamut.co.th/x/ZoPGQQ) | unearn_premium | {UNEARN_PER} |

Template Profit Commission
1. ตรวจสอบ {TEMPLATE_ID} = [cf_template_file](http://wiki.thaisamut.co.th/x/TYLKQQ).cf_template_file_id
2. นำค่าต่าง ๆ ที่ได้ ไปออก Report ตาม ID

| cf_template_file_id | template_file_name | Group | Mapping | ตัวอย่างไฟล์ PDF |
| --- | --- | --- | --- | --- |
| 508 | Profit_Com_ORD_Thaire | Group 1 | [Template - 508 - Profit_Com_ORD_Thaire_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+508+-+Profit_Com_ORD_Thaire_Estimate) | [https://drive.google.com/file/d/1_qEt1YR0rabFXJ800VwMlGI-uwBz5fW6/view?usp=drive_link](https://drive.google.com/file/d/1_qEt1YR0rabFXJ800VwMlGI-uwBz5fW6/view?usp=drive_link) |
| 509 | Profit_Com_GCL_50_Thaire | Group 1 | [Template - 509 - Profit Com_GCL_50_Thaire_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+509+-+Profit+Com_GCL_50_Thaire_Estimate) | [https://drive.google.com/file/d/1FaC-nDm5JdtUdTFIcYAIcgJIrka4LT5e/view?usp=drive_link](https://drive.google.com/file/d/1FaC-nDm5JdtUdTFIcYAIcgJIrka4LT5e/view?usp=drive_link) |
| 510 | Profit_Com_Nonmed_PA_Thaire | Group 1 | [Template - 510 - Profit Com_Nonmed_PA_Thaire_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+510+-+Profit+Com_Nonmed_PA_Thaire_Estimate) | [https://drive.google.com/file/d/1Xd7hJlYw1HnxHMhiUeu6dfsogzcgv1PD/view?usp=drive_link](https://drive.google.com/file/d/1Xd7hJlYw1HnxHMhiUeu6dfsogzcgv1PD/view?usp=drive_link) |
| 511 | Profit_Com_Nonmed_PA_Scor | Group 1 | [Template - 511 - Profit Com_Nonmed_PA_Scor_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+511+-+Profit+Com_Nonmed_PA_Scor_Estimate) |
| 512 | Profit_Com_GCL_Thaire | Group 1 | [Template - 512 - Profit Com_GCL_Thaire_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+512+-+Profit+Com_GCL_Thaire_Estimate) | [https://drive.google.com/file/d/1lYASoT296MGq_cYtCKqcGsV86nJ4_lf_/view?usp=drive_link](https://drive.google.com/file/d/1lYASoT296MGq_cYtCKqcGsV86nJ4_lf_/view?usp=drive_link) |
| 513 | Profit_Com_CI17_Thaire | Group 1 | [Template - 513 - Profit Com_CI17_Thaire_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+513+-+Profit+Com_CI17_Thaire_Estimate) | [https://drive.google.com/file/d/1ci0_Cqkqf5nF062nCfqvzz2oK-enMl58/view?usp=drive_link](https://drive.google.com/file/d/1ci0_Cqkqf5nF062nCfqvzz2oK-enMl58/view?usp=drive_link) |
| 514 | Profit_Com_CI50_Thaire | Group 1 | [Template - 514 - Profit Com_CI50_Thaire_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+514+-+Profit+Com_CI50_Thaire_Estimate) | [https://drive.google.com/file/d/1HtoPXX55FHfYWYfSDto-oxQ_ZLR1ULps/view?usp=drive_link](https://drive.google.com/file/d/1HtoPXX55FHfYWYfSDto-oxQ_ZLR1ULps/view?usp=drive_link) |
| 515 | Profit_Com_Gp_Toa | Group 2 | [Template - 515 - Profit Com_Gp_Toa_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+515+-+Profit+Com_Gp_Toa_Estimate) | [https://drive.google.com/file/d/1HKGpWYtOwj6wzqoSTgNIJDYab81dZSfD/view?usp=drive_link](https://drive.google.com/file/d/1HKGpWYtOwj6wzqoSTgNIJDYab81dZSfD/view?usp=drive_link) |
| 516 | Profit_Com_CB_Toa | Group 3 | [Template - 516 - Profit Com_CB_Toa_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+516+-+Profit+Com_CB_Toa_Estimate) | [https://drive.google.com/file/d/1MLY8FUCIG_CzWA_cPRm_T2etiwPQVuG4/view?usp=drive_link](https://drive.google.com/file/d/1MLY8FUCIG_CzWA_cPRm_T2etiwPQVuG4/view?usp=drive_link) |
| 517 | Profit_Com_Med_GCL_GB | Group 4 | [Template - 517 - Profit_Com_Med_GCL_GB_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+517+-+Profit_Com_Med_GCL_GB_Estimate) |  |
| 518 | Profit_Com_Hss_Rider | Group 5 | [Template - 518 - Profit_Com_Hss_Rider_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+518+-+Profit_Com_Hss_Rider_Estimate) | [https://drive.google.com/file/d/1cE7keC2nkNgn-yzG3ykWrMgk2oimz42D/view?usp=drive_link](https://drive.google.com/file/d/1cE7keC2nkNgn-yzG3ykWrMgk2oimz42D/view?usp=drive_link) |
| 519 | Profit_Com_Gp_Mapfre | Group 2 | [Template - 519 - Profit_Com_Gp_Mapfre_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+519+-+Profit_Com_Gp_Mapfre_Estimate) | [https://drive.google.com/file/d/1MudsU-Uk0DpUOdunSnz7o0aNsfN83_JK/view?usp=drive_link](https://drive.google.com/file/d/1MudsU-Uk0DpUOdunSnz7o0aNsfN83_JK/view?usp=drive_link) |
| 520 | Profit_Com_CI120_Thaire | Group 1 | [Template - 520 - Profit_Com_CI120_Thaire_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+520+-+Profit_Com_CI120_Thaire_Estimate) | [https://drive.google.com/file/d/1HtoPXX55FHfYWYfSDto-oxQ_ZLR1ULps/view?usp=drive_link](https://drive.google.com/file/d/1HtoPXX55FHfYWYfSDto-oxQ_ZLR1ULps/view?usp=drive_link) |
| 521 | Profit_Com_UL | Group 1 | [Template - 521 - Profit_Com_UL_Estimate](http://wiki.thaisamut.co.th/display/RDSINRI/Template+-+521+-+Profit_Com_UL_Estimate) | [https://drive.google.com/file/d/1_qEt1YR0rabFXJ800VwMlGI-uwBz5fW6/view?usp=drive_link](https://drive.google.com/file/d/1_qEt1YR0rabFXJ800VwMlGI-uwBz5fW6/view?usp=drive_link) |

***หมายเหตุ:***

- *รูปแบบการแสดงผลทั้งหมดให้อ้างอิงตามตัวอย่างไฟล์*
- *Export File เป็น excel*
- *Ref. [https://docs.google.com/spreadsheets/d/1rsS5yRgZqPfMl4mlJlB8vuxeE4Sle97M/edit?gid=989990601#gid=989990601](https://docs.google.com/spreadsheets/d/1rsS5yRgZqPfMl4mlJlB8vuxeE4Sle97M/edit?gid=989990601#gid=989990601)*
