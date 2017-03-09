package net.artesware.service;

import java.util.Map;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Component
public class GuitarCalculator {

	public List<Map<String, Object>> calcFretPositions(float scale, int numFrets) {
		float f = scale;
		float lastPos = 0.0f;
		List <Map<String, Object>>result = new ArrayList<Map<String, Object>>();
		Map<String, Object> pos;
		for(int i = 0; i < numFrets + 1; i++) {
			float fretPos = f / 17.817f;
			f -= fretPos;
			pos = new HashMap<String, Object>();
			pos.put("fret", i+1);
			pos.put("positionFromNut", lastPos + fretPos);
			pos.put("positionFromFret", fretPos);
			result.add(pos);
			lastPos += fretPos;
		}
		return result;
	}

	public Map<String, Object> calcBridgePosition(float scale, float jointPos, float neckAngle, float stringHeight,
			float fretHeight, float thickness) {
		float base = (float) ((scale - jointPos) * Math.cos((double)neckAngle * Math.PI / 180.0f));
	    float height = (float) ((scale - jointPos) * Math.sin((double)neckAngle * Math.PI / 180.0f));
	    float strHeight = (stringHeight - 0.1f) * 2.0f + fretHeight;
	    Map<String, Object> result = new HashMap<String, Object>();
	    result.put("saddlePosition", base);
	    result.put("saddleHeight", (height + strHeight + thickness));
		return result;
	}

	public Map<String, Object> calcFingerboardSize(float scale, int numStrings, int numFrets, float nutPitch,
			float saddlePitch, float nutSpacing) {
	    float fretboardLength = (float) (scale - scale / Math.pow(2.0f, ((numFrets+1.0f)/12.0f)));
	    float nutWidth = nutPitch * (numStrings - 1) + nutSpacing * 2;
	    float bw = saddlePitch * (numStrings - 1) + nutSpacing * 2;
	    float endWidth = nutWidth + (bw-nutWidth) * (fretboardLength/scale);
	    Map<String, Object> result = new HashMap<String, Object>();
	    result.put("length", fretboardLength);
	    result.put("nutWidth", nutWidth);
	    result.put("endWidth", endWidth);
		return result;
	}

	
}
