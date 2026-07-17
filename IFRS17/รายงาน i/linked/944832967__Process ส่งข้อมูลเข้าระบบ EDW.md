# Process ส่งข้อมูลเข้าระบบ EDW

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944832967
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
กระบวนการ “ยืนยันส่งข้อมูลเข้าระบบ EDW” ในหน้า [EDW-MPS-SD008 หน้าจอประมวลผล MPS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=918028352) สำหรับเก็บข้อมูลกรมธรรม์ I01-I05 พร้อม Tagging ไว้ที่ Table Master Policy และส่งเข้า Table Master Core EDW

StateDiagram: [state_diagram_masterPolicy_to_coreEDW](http://wiki.thaisamut.co.th/download/attachments/944832967/sss.png?version=1&modificationDate=1646896491248&api=v2)

>
**Process Overview**

1. Update ข้อมูลกรมธรรม์เก่าในระบบ edw เข้า Table Master Policy ดังนี้นำข้อมูลกรมธรรม์จาก Table Landing I01-I05 ที่ได้จาก Batch
2. นำข้อมูลกรมธรรม์จาก Table กระบวนการปิดรอบ
Insert ข้อมูลกรมธรรม์เคสใหม่, เคสใหม่ที่มีการ Freelook, หรือ Reinstate ในรอบการประมวลผลเดือนปัจจุบัน เข้า Table Master Policy ดังนี้
1. นำข้อมูลกรมธรรม์จาก Table Untag I01-I05
2. นำข้อมูล Tagging จาก Table Landing Tagging
บันทึก Log

>
**Related Tables**

| Table | Descriptions | I01 - สามัญ | I02 - Rider สามัญ | I01 - IND | I03 - PA | I04 - Unit Linked | I05 - Group | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Landing I01-I05 จาก Batch | ข้อมูลกรมธรรม์ ณ สิ้นเดือนก่อน | [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)[tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02) | [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)[tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02) | [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) | [tx_mps_landing_i03](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i03) | [tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04) | [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) | |
| กระบวนการปิดรอบ | ปรับสถานะกธ.สิ้นผล จาก [EDW-MPS-SD002](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471486) | ข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ | | | [tx_mps_backdate_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ind) | | | |
| ข้อมูล Actual SA จาก [EDW-MPS-SD010](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=936837635) | ข้อมูลปรับปรุงทุนประกันภัยรวม ของกรมธรรม์ | [tx_mps_actual_sa_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_actual_sa_ord) | | [tx_mps_actual_sa_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_actual_sa_ind) | | | | |
| ข้อมูลเงินกู้สามัญ จาก [EDW-MPS-SD011](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=938606638)ข้อมูลเงินกู้อุตสาหกรรม จาก [EDW-MPS-PS012](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=943128662) | ข้อมูลเงินกู้ ของกรมธรรม์ | [tx_mps_policy_loan_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_ord) | | [tx_mps_policy_loan_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_ind) | | | | |
| Untag I01-I05 | ข้อมูลกรมธรรม์ เคสใหม่, เคสใหม่ที่มีการ Freelook และเคส Reinstate | [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) | [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02) | [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) | [tx_mps_untag_i03](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i03) | [tx_mps_untag_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i04) | [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) | |
| Landing Tagging | ข้อมูล Tagging | [tx_mps_landing_icg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_icg)[tx_mps_landing_rcg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_rcg) | [tx_mps_landing_icg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_icg)[tx_mps_landing_rcg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_rcg) | [tx_mps_landing_icg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_icg)[tx_mps_landing_rcg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_rcg) | [tx_mps_landing_icg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_icg)[tx_mps_landing_rcg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_rcg) | [tx_mps_landing_icg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_icg)[tx_mps_landing_rcg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_rcg) | [tx_mps_landing_icg_rcg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_icg_rcg) | |
| Master Policy | ข้อมูลกรมธรรม์พร้อม Tagging | [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) | [tx_mps_master_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02) | [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) | [tx_mps_master_i03](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i03) | [tx_mps_master_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i04) | [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05) | |
| Master Core EDW | ข้อมูลกรมธรรม์พร้อม Tagging แต่ละ period | [tx_mps_master_i01(CoreEDW)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833112) | [tx_mps_master_i02 (CoreEDW)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833116) | [tx_mps_master_i04 (CoreEDW)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833125) | [tx_mps_master_i03 (CoreEDW)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833120) | [tx_mps_master_i04 (CoreEDW)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833125) | [tx_mps_master_i05 (CoreEDW)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833132) | |

| Process | Jira |
| --- | --- |
| [Process ส่งข้อมูลเข้าระบบ EDW ของ I01](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833192) | [ADW-2894](http://jira.thaisamut.co.th/browse/ADW-2894) - [EDW-PH3][MPS] พัฒนา Process ส่งข้อมูลเข้าระบบ EDW ของ I01 (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| [Process ส่งข้อมูลเข้าระบบ EDW ของ I02](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=946143398) | [ADW-2926](http://jira.thaisamut.co.th/browse/ADW-2926) - [EDW-PH3][MPS] พัฒนา Process ส่งข้อมูลเข้าระบบ EDW ของ I02 (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| [Process ส่งข้อมูลเข้าระบบ EDW ของ I03](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=946143409) | [ADW-2950](http://jira.thaisamut.co.th/browse/ADW-2950) - [EDW-PH3][MPS] พัฒนา Process ส่งข้อมูลเข้าระบบ EDW ของ I03 (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| [Process ส่งข้อมูลเข้าระบบ EDW ของ I04](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=945193049) | [ADW-2896](http://jira.thaisamut.co.th/browse/ADW-2896) - [EDW-PH3][MPS] สร้าง Process ส่งข้อมูลเข้าระบบ EDW ของ I04 (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| [Process ส่งข้อมูลเข้าระบบ EDW ของ I05](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=946143610) | [ADW-2919](http://jira.thaisamut.co.th/browse/ADW-2919) - [EDW-PH3][MPS] สร้าง Process ส่งข้อมูลเข้าระบบ EDW ของ I05 (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) [ADW-3580](http://jira.thaisamut.co.th/browse/ADW-3580) - [EDW-PH3][MPS] ปรับเงื่อนไข Process ส่งข้อมูลเข้าระบบ EDW ของ I05 (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |