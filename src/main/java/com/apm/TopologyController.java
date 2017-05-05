package com.apm;

//import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable; 

import java.io.IOException;
import com.fasterxml.jackson.core.JsonParseException;  
import com.fasterxml.jackson.databind.JsonMappingException;  
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Random;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;


@RestController
@RequestMapping("/topo")
public class TopologyController {

    @RequestMapping(path="/save", method=RequestMethod.POST)
    public @ResponseBody boolean saveTopo(@RequestBody Map<String, String> params) {
        System.out.println(params);
        return true;
    }

    @RequestMapping("/get/{id}")
    public @ResponseBody Map<String, Object> get(@PathVariable(value="id") String id) {
        Map<String, Object> result = null;
        if (id.equals("-1") || id.equals("1") || id.equals("4") ) {
           result = this.createNetworkTopo();
        } else {
           result = this.createServiceTopo();
        }

        return result;
    }

    private Map<String, Object> createServiceTopo() {
      Map<String, Object> result = new HashMap();
        List<Map<String, Object>> nodes = new ArrayList();
        List<Map<String, Object>> edges = new ArrayList();
        List<String> strNodes = new ArrayList();
        List<String> strEdges = new ArrayList();


      strNodes.add("{\"id\": \"1\", \"label\": \"消息服务器\", \"resId\":\"1\", \"image\":\"./img/apache.svg\", \"x\":-542, \"y\":-10, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"2\", \"label\": \"数据库\", \"resId\":\"2\", \"image\":\"./img/oracle.svg\", \"x\":-400, \"y\":-111, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"3\", \"label\": \"WEB服务器\", \"resId\":\"3\", \"image\":\"./img/tomcat.svg\", \"x\":-400, \"y\":100, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"4\", \"label\": \"消息服务器\", \"resId\":\"4\", \"image\":\"./img/kafka.svg\", \"x\":-238, \"y\":-15, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"5\", \"label\": \"接口程序\", \"resId\":\"5\", \"image\":\"./img/java.svg\", \"x\":-73, \"y\":-18, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"6\", \"label\": \"工单下发程序\", \"resId\":\"6\", \"image\":\"./img/app1.svg\", \"x\":55, \"y\":-117, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"7\", \"label\": \"工单下发程序\", \"resId\":\"7\", \"image\":\"./img/app1.svg\", \"x\":55, \"y\":85, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"8\", \"label\": \"开通模块\", \"resId\":\"8\", \"image\":\"./img/app.svg\", \"x\":245, \"y\":-117, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"9\", \"label\": \"开通模块\", \"resId\":\"9\", \"image\":\"./img/app.svg\", \"x\":245, \"y\":85, \"shape\":\"circularImage\"}");



        strEdges.add("{\"id\": \"1\", \"from\":\"1\", \"to\":\"2\"}");
        strEdges.add("{\"id\": \"2\", \"from\":\"1\", \"to\":\"3\"}");
        strEdges.add("{\"id\": \"3\", \"from\":\"4\", \"to\":\"2\"}");

        strEdges.add("{\"id\": \"4\", \"from\":\"4\", \"to\":\"3\"}");
        strEdges.add("{\"id\": \"5\", \"from\":\"5\", \"to\":\"4\"}");
        strEdges.add("{\"id\": \"6\", \"from\":\"6\", \"to\":\"5\"}");
        strEdges.add("{\"id\": \"7\", \"from\":\"7\", \"to\":\"5\"}");
        strEdges.add("{\"id\": \"8\", \"from\":\"8\", \"to\":\"6\"}");
        strEdges.add("{\"id\": \"9\", \"from\":\"9\", \"to\":\"7\"}");

        System.out.println("########:" + strNodes.size());
        for (String item : strNodes) {
            nodes.add(this.jsonMapper(item));
        }

        for (String item : strEdges) {
            edges.add(this.jsonMapper(item));
        }

        result.put("id", "1");
        result.put("groupId", "1");
        result.put("type", "service");
        result.put("nodes", nodes);
        result.put("edges", edges);
        return result;      
    }

    private Map<String, Object> createNetworkTopo() {
        Map<String, Object> result = new HashMap();
        List<Map<String, Object>> nodes = new ArrayList();
        List<Map<String, Object>> edges = new ArrayList();
        List<String> strNodes = new ArrayList();
        List<String> strEdges = new ArrayList();

      strNodes.add("{\"id\": \"1\", \"label\": \"数据库服务器\", \"resId\":\"3\", \"image\":\"./img/server2.svg\", \"x\":-400, \"y\":-100, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"2\", \"label\": \"WEB服务器\", \"resId\":\"4\", \"image\":\"./img/server2.svg\", \"x\":-400, \"y\":100, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"3\", \"label\": \"应用服务器1\", \"resId\":\"5\", \"image\":\"./img/server.svg\", \"x\":50, \"y\":-150, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"4\", \"label\": \"应用服务器2\", \"resId\":\"6\", \"image\":\"./img/server.svg\", \"x\":50, \"y\":-50, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"6\", \"label\": \"采集机1\", \"resId\":\"5\", \"image\":\"./img/server.svg\", \"x\":250 , \"y\":0, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"7\", \"label\": \"采集机2\", \"resId\":\"6\", \"image\":\"./img/server.svg\", \"x\":250, \"y\":100, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"5\", \"label\": \"交换机\", \"resId\":\"7\", \"image\":\"./img/switch.svg\", \"x\":-200, \"y\":0, \"shape\":\"circularImage\"}");
      strNodes.add("{\"id\": \"8\", \"label\": \"防火墙\", \"resId\":\"7\", \"image\":\"./img/firewall.svg\", \"x\":50, \"y\":50, \"shape\":\"circularImage\"}");



        strEdges.add("{\"id\": \"1\", \"from\":\"2\", \"to\":\"1\"}");
        strEdges.add("{\"id\": \"2\", \"from\":\"3\", \"to\":\"1\"}");
        strEdges.add("{\"id\": \"3\", \"from\":\"4\", \"to\":\"1\"}");

        strEdges.add("{\"id\": \"4\", \"from\":\"1\", \"to\":\"5\"}");
        strEdges.add("{\"id\": \"5\", \"from\":\"2\", \"to\":\"5\"}");

        strEdges.add("{\"id\": \"6\", \"from\":\"8\", \"to\":\"6\"}");
        strEdges.add("{\"id\": \"7\", \"from\":\"8\", \"to\":\"7\"}");
        strEdges.add("{\"id\": \"8\", \"from\":\"8\", \"to\":\"5\"}");
        strEdges.add("{\"id\": \"9\", \"from\":\"3\", \"to\":\"5\"}");
        strEdges.add("{\"id\": \"10\", \"from\":\"4\", \"to\":\"5\"}");

        System.out.println("########:" + strNodes.size());
        for (String item : strNodes) {
            nodes.add(this.jsonMapper(item));
        }

        for (String item : strEdges) {
            edges.add(this.jsonMapper(item));
        }

        result.put("id", "2");
        result.put("groupId", "1");
        result.put("type", "network");
        result.put("nodes", nodes);
        result.put("edges", edges);
        return result;      
    }

    private Map<String, Object> jsonMapper(String json) {
   		Map<String, Object> result = null;
   		boolean isEmpty = (json == null || json.trim().length() == 0);
        if (!isEmpty) {
        	ObjectMapper mapper = new ObjectMapper();
        	try {
        		result = mapper.readValue(json, HashMap.class);
        	} catch (IOException e) {
            	e.printStackTrace();
        	}
        }
   		return result;
   	}

}